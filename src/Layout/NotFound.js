import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Result } from "antd";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, [navigate]);
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to="/login"><Button type="primary">Back Home</Button></Link>}
      />
    </div>
  );
}

export default NotFound;
