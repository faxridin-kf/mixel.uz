import React from 'react';
import { Link } from 'react-router-dom'
import { Collapse } from 'antd';
const { Panel } = Collapse;

import './_style.scss';


function RightBlock() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return(
    <div className="footer_right_box">
      <div className="footer_right_wrapper">
        <div className="footer_right_wrapper_item">
          <h2>Категории</h2>
          <ul>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Игровые кресла</a>
            </li>
            <li>
              <a href="#">Телефоны</a>
            </li>
            <li>
              <a href="#">Модули памяти</a>
            </li>
            <li>
              <a href="#">Моноблоки</a>
            </li>
          </ul>
        </div>
        <div className="footer_right_wrapper_item">
          <h2>Общее</h2>
          <ul>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Наши магазины</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#">Правила программы лояльности</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="footer_right_wrapper_item">
          <h2>Покупателям</h2>
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">Покупка в рассрочку</a>
            </li>
            <li>
              <a href="#">Доставка и оплата</a>
            </li>
            <li>
              <a href="#">Правила покупок с cashback</a>
            </li>
            <li>
              <a href="#">Возврат / Обмен</a>
            </li>
            <li>
              <a href="#">Правила пользования купонами</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_menu_mobile">
        <Collapse accordion>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
      </div>
  )
}
export default RightBlock;