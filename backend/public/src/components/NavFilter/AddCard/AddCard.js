import { Form, Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { fetchPostIdeaAC } from '../../../redux/actionCreators'

export default function AddCard({ show, setShow }) {
  const dispatch = useDispatch();
  const categories = ['Семье', 'Друзьям', 'Любимым', 'Коллегам', 'Себе', 'Детям', 'Для всех']

  const addIdea = (e) => {
    e.preventDefault();

    let checkboxesChecked = []
    function getCheckedCheckBoxes() {
      let checkboxes = document.querySelectorAll('.form-check-input');
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i].id)
        }
      }
      return checkboxesChecked
    }
    getCheckedCheckBoxes()

    const {
      titleGift: {
        value: titleGift
      },
      description: {
        value: description
      },
      img: {
          value: img
      }
    } = e.target
    dispatch(fetchPostIdeaAC({ titleGift, description, tag: checkboxesChecked, img }))
    setShow(false)
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <hr />
      <Button onClick={handleShow} style={{backgroundColor: 'darkgreen', border: 'darkgreen'}}>Создать идею</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавьте свою идею</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={addIdea}>

            <Form.Group controlId="formBasicText">
              <Form.Label>Название идеи</Form.Label>
              <Form.Control name="titleGift" type="text" placeholder="Придумайте и введите название идеи" />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Описание</Form.Label>
              <Form.Control name="description" type="text" placeholder="Опишите свою идею" />
            </Form.Group>

            <Form.Group className="formBasicCheckBox">
              <Form.Label>Кому подходит подарок? Выберете все подходящие категории</Form.Label>
              {categories.map((category) => (
                <Form.Check key={Math.random()}
                  name='category'
                  type='checkbox'
                  id={category}
                  label={category}
                />
              ))}
            </Form.Group>
            <Form.Group>
              <Form.File id="formControlFile1"  name="file" />
              <Form.Control name="img" type="url" placeholder="URL" />
            </Form.Group>
            <Button variant="success" type="submit">
              Добавить
                </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
                </Button>
          </Form>

        </Modal.Body>
      </Modal>
    </div>
  )
}

