import { Modal } from "react-bootstrap";
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <input type='text' placeholder='username' />
      <input type="password" placeholder='password'/>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn" onClick={handleClose}>Close</Button>
          
        </Modal.Footer>
      </Modal>