import React from "react";
import Header from "./Header";
import EditIcon from "./IconComponents/EditIcon"
import {Input, Button, Card,CardBody} from "@nextui-org/react";
import SaveIcon from "./IconComponents/SaveIcon";

const Profile: React.FC = () => {

  const [isUsernameReadOnly, setUsernameEditable] = React.useState(true);
  const toggleUsernameEditability = () => setUsernameEditable(!isUsernameReadOnly);
  const [isPhoneReadOnly, setPhoneEditable] = React.useState(true);
  const togglePhoneEditability = () => setPhoneEditable(!isPhoneReadOnly);
  const [isEmailReadOnly, setEmailEditable] = React.useState(true);
  const toggleEmailEditability = () => setEmailEditable(!isEmailReadOnly);
  const [isChangePasswordVisible, setChangePasswordVisible] = React.useState(false);
  const toggleChangePasswordVisibility = () => setChangePasswordVisible(!isChangePasswordVisible);

  return (
    <>
      <Header/> 
      <div className="profileContainer w-screen flex-col flex items-center">
      <h1 className="p-5 text-xl">Edit Profile</h1>
      <div className=" flex flex-col gap-4 items-center">
      <Card>
      <CardBody className="flex flex-row items-center gap-4">
      <Input
          isReadOnly={isUsernameReadOnly}
          type="email"
          color={isUsernameReadOnly?"primary":"default"}
          label="Username"
          defaultValue="Mordisquitos"
          className="max-w-xs"
        />
      {isUsernameReadOnly?
        <Button color="success" startContent={<EditIcon/>} onPress={toggleUsernameEditability}>
      Edit        
    </Button>  :    <Button color="success" startContent={<SaveIcon/>} onPress={toggleUsernameEditability}>
      Save        
    </Button>}
      </CardBody>
      </Card>
      <Card>      
      <CardBody className="flex flex-row items-center gap-4">
      {isChangePasswordVisible ? 
      (<>
      <Input          
          label="New Password"
          color="default"
          type="password"
          className="max-w-xs"
        />
      <Input          
          label="Repeat New Password"
          color="default"
          type="password"
          className="max-w-xs"
        />
        <Button color="success" startContent={<SaveIcon/>} onPress={toggleChangePasswordVisibility}>
        Save        
      </Button>
      </>)
      : 
      (<>
      <Input      
        isReadOnly
        label="Password"
        color="primary"
        type="password"
        className="max-w-xs"
      />
      <Button color="success" startContent={<EditIcon/>} 
      onPress={toggleChangePasswordVisibility}>
      Edit        
    </Button>
    </>)}      
    </CardBody> 
      </Card>
      <Card>
      <CardBody className="flex flex-row items-center gap-4">
      <Input
          isReadOnly={isEmailReadOnly}
          type="email"
          color={isEmailReadOnly?"primary":"default"}
          label="Email"
          defaultValue="mariojm2612@gmail.com"
          className="max-w-xs"
        />
    {isEmailReadOnly?
        <Button color="success" startContent={<EditIcon/>} onPress={toggleEmailEditability}>
      Edit        
    </Button>  :    <Button color="success" startContent={<SaveIcon/>} onPress={toggleEmailEditability}>
      Save        
    </Button>}
      </CardBody>
      </Card>
      <Card>
      <CardBody className="flex flex-row items-center gap-4">
      <Input
          isReadOnly={isPhoneReadOnly}
          type="number"
          color={isPhoneReadOnly?"primary":"default"}
          label="Phone"
          defaultValue="644343107"
          className="max-w-xs"
        />
        {isPhoneReadOnly?
        <Button color="success" startContent={<EditIcon/>} onPress={togglePhoneEditability}>
      Edit        
    </Button>  :    <Button color="success" startContent={<SaveIcon/>} onPress={togglePhoneEditability}>
      Save        
    </Button>}
      </CardBody>
      </Card>
      </div>
    </div>
  </>
  );
};

export default Profile;
