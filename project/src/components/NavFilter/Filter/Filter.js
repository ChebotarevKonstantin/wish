import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import style from './Filter.module.css'
function Filter(props) {
  const { category } = useParams()
  const history = useHistory()
  // const [state, setState] = useState(category)

  return (
    <div className={style.input}>
      <div className="form-group">
        <select onChange={(e) => {
          history.push(`/ideas/${e.target.value}`)
        }}
          className="custom-select mr-sm-2" id="inlineFormCustomSelect">
          <option  selected>{category}</option>
          <option value="Для всех">Для всех</option>
          <option value="Коллегам">Коллегам</option>
          <option value="Друзьям">Друзьям</option>
          <option value="Любимым">Любимым</option>
          <option value="Себе">Себе</option>
          <option value="Семье">Семье</option>
          <option value="Детям">Детям</option>
          <option defaultValue="Все категории">Все категории</option>

        </select>
      </div>
    </div>
  );
}

export default Filter;
