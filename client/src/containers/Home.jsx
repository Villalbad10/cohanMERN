import React, { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { deleteData } from "../helpers/deleteData";
import Agregar from "../components/Agregar";
import { Button, Card, Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { updateData } from "../helpers/updateData";
import { ToastContainer, toast } from "react-toastify";

const add = Yup.object().shape({
  nombre: Yup.string().required("Este campo es requerido"),
  phone: Yup.string()
    .min(10, "N de celular muy corto")
    .max(10, "N celular muy Largo")
    .required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Debe ser del tipo ana@ana.com")
    .required("Este email se requiere"),
});

const Home = () => {
  const [data, setData] = useState([]);
  const [idUp, setIdUp] = useState();
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState({
    nombre: "",
    phone: "",
    email: "",
  });

  const handleClose = () => setShow(false);
  useEffect(() => {
    getData().then((res) => setData(res.data));
    //console.log(data);
  }, [data]);

  const handleEditar = (id) => {
    setShow(true);
    setIdUp(id);
    const editar = data.filter((per) => per.id == id);

    setEdit({
      nombre: editar[0].nombre,
      phone: editar[0].phone,
      email: editar[0].email,
    });
  };
  const handleDelete = (id) => {
    deleteData(id);
    toast.error("Registro eliminado con exito");
  };
  const handleBotonUpdate = () => {
    setShow(false);
    toast.info("Registro actualizado con exito");
  };
  return (
    <div className="container">
      <ToastContainer />
      <Agregar />

      <section className="d-flex justify-content-center flex-wrap mt-4">
        {data.map(({ id, nombre, phone, email }) => (
          <Card
            className="me-4 mt-2"
            key={id}
            border="primary"
            style={{ width: "18.5rem" }}
          >
            <Card.Header>
              <strong>{nombre}</strong>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>Cel:</strong> {phone}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {email}
              </Card.Text>
              <section className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-danger "
                  onClick={() => handleDelete(id)}
                >
                  <AiFillDelete />
                </button>
                <button
                  className="btn btn-outline-warning "
                  onClick={() => handleEditar(id)}
                >
                  <FaEdit />
                </button>
              </section>
            </Card.Body>
          </Card>
        ))}
      </section>

      <section>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={edit}
              validationSchema={add}
              onSubmit={(values, actions) => {
                //console.log(values);
                updateData(idUp, values);
                actions.resetForm();
              }}
            >
              {({ errors, touched, values }) => (
                <Form>
                  <Field
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    className="input-add"
                    value={values.nombre}
                  />
                  {errors.nombre && touched.nombre ? (
                    <div>{errors.nombre}</div>
                  ) : null}
                  <Field
                    type="text"
                    placeholder="Celular"
                    name="phone"
                    className="input-add"
                    value={values.phone}
                  />
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}
                  <Field
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input-add"
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}

                  <Button
                    onClick={() => handleBotonUpdate()}
                    variant="contained"
                    color="success"
                    type="submit"
                    className="btn-add"
                  >
                    Editar
                  </Button>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      </section>
    </div>
  );
};

export default Home;
