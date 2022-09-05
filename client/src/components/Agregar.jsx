import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { postData } from "../helpers/postData";
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

const Agregar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = () => toast.success("Registro agregaso con exito");
  return (
    <div>
      <ToastContainer />
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
                  <div className="error">{errors.nombre}</div>
                ) : null}
                <Field
                  type="text"
                  placeholder="Celular"
                  name="phone"
                  className="input-add"
                  value={values.phone}
                />
                {errors.phone && touched.phone ? (
                  <div className="error">{errors.phone}</div>
                ) : null}
                <Field
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input-add"
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}

                <Button
                  onClick={() => notify()}
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
    </div>
  );
};

export default Agregar;
