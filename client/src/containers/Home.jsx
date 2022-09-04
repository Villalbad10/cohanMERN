import React, { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { Button, Card, Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { postData } from "../helpers/postData";

const add = Yup.object().shape({
  nombre: Yup.string().required("Este campo es requerido"),
  phone: Yup.string()
    .min(10, "N de celular muy corto")
    .max(10, "celular muy Largo")
    .required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Debe ser del tipo ana@ana.com")
    .required("Este email se requiere"),
});

const Home = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getData().then((res) => setData(res.data));
    //console.log(data);
  }, []);

  return (
    <div className="container">
      <Button variant="success" onClick={handleShow}>
        Agregar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              nombre: "",
              phone: "",
              email: "",
            }}
            validationSchema={add}
            onSubmit={(values, actions) => {
              //console.log(values);
              postData(values);
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
                  variant="contained"
                  color="success"
                  type="submit"
                  className="btn-add"
                >
                  Agregar
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <section className="d-flex justify-content-center flex-wrap mt-4">
        {data.map(({ id, nombre, phone, email }) => (
          <Card
            className="me-4 mt-2"
            key={id}
            border="primary"
            style={{ width: "18.5rem" }}
          >
            <Card.Header>{nombre}</Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>Cel:</strong> {phone}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {email}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Home;
