import { useState } from "react";
import {Link} from 'react-router-dom'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,Input, Checkbox, Button} from "@nextui-org/react";
import { LockIcon } from "./IconComponents/LockIcon";
import { MailIcon } from "./IconComponents/MailIcon";
import { ModalProps } from "./types";

function Login ({isOpen, onOpenChange, theme}: ModalProps)  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser= async () => {
    const data = { email, password };

    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const credentials = await response.text();

    if (credentials == "OK") {
      localStorage.token = credentials;
      localStorage.email = email;
      window.location.href = "/app";
    } else {
      alert("Email or password are incorrect.");
    }
  };

  return (
        <>
                <Modal 
                  isOpen={isOpen} 
                  onOpenChange={onOpenChange}
                  placement="top-center"  
                >
                  <div className={`text-foreground bg-background ${theme}`}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">Welcome Back!</ModalHeader>
                        <ModalBody>
                          <Input
                            autoFocus
                            endContent={
                              <MailIcon/>
                            }
                            label="Email"
                            placeholder="Enter your email"
                            variant="bordered"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <Input
                            endContent={
                              <LockIcon/>
                            }
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            variant="bordered"
                            onChange={(e) => setPassword(e.target.value)}                          
                          />
                          <div className="flex py-2 px-1 justify-between">
                            <Checkbox
                              classNames={{
                                label: "text-small",
                              }}
                            >
                              Remember me
                            </Checkbox>
                            <Link color="primary" to="/">
                              Forgot password?
                            </Link>
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="flat" onClick={onClose}>
                            Close
                          </Button>
                          <Button color="primary" onPress={loginUser}>
                            Log In
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                  </div>
                </Modal>
                </>
            );
          }


export default Login;
