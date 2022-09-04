import React from "react";
import { useDispatch } from "react-redux";
import {
  ContainerLogin,
  ContFrom,
  LogoLogin,
  OptionLogin,
} from "../styles/styles";
import { Button, Form } from "react-bootstrap";
import { loginGoogle } from "../firebase/loginGoogle";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <ContainerLogin>
      <OptionLogin>
        <h2 className="text-center mb-5">Bienvenido a COHAN</h2>

        <ContFrom>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="input-login shadow-sm"
                type="email"
                required
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="input-login shadow-sm"
                type="password"
                required
                placeholder="Password"
              />
            </Form.Group>
            <Button className="rounded" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </ContFrom>
        <button
          onClick={() => dispatch(loginGoogle())}
          className="btn-google mt-4"
        >
          Inicie con
          <img src="https://res.cloudinary.com/villalbad10/image/upload/v1661009700/titaMedia/google_avbjfd.png" />{" "}
        </button>
      </OptionLogin>

      <LogoLogin>
        <img src="https://res.cloudinary.com/villalbad10/image/upload/v1662305112/cohan/20943394_sdrhrs.png" />
      </LogoLogin>
    </ContainerLogin>
  );
};

export default Login;
