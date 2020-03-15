import React from 'react';
import Notification from '../biblioteca/elements/Notification';
import renderer from 'react-test-renderer';

//  ALERTA: NOTIFICATION IS-LIGHT NÃO FUNCIONANDO, NEM COM O CÓDIGO DA DOCUMENTAÇÃO BULMA

function onClick(){
    alert("testando delete");
}
test('test colors light notification',()=>{
    const notifications_light =  renderer.create(
        <>
        <Notification definition="primary light" delete={true} onClickDelete={onClick}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
  </Notification>

  <Notification definition="link light" delete={true} onClickDelete={onClick}>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit
  </Notification>

  <Notification definition="info light" delete={true} onClickDelete={onClick}>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit
  </Notification>

  <Notification definition="success light" delete={true} onClickDelete={onClick}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
  </Notification>

  <Notification definition="warning light" delete={true} onClickDelete={onClick}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
  </Notification>

  <Notification definition="danger light" delete={true} onClickDelete={onClick}>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
  </Notification>
     </>
    ).toJSON();

    expect(notifications_light).toMatchSnapshot();
});


test('test colors notification',()=>{
    const notifications =  renderer.create(
     <>
       <Notification delete={true} onClickDelete={onClick}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
  </Notification>

  <Notification definition="primary" delete={true} onClickDelete={onClick}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
  </Notification>

  <Notification definition="link" delete={true} onClickDelete={onClick}>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit
  </Notification>

  <Notification definition="info" delete={true} onClickDelete={onClick}>
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit
  </Notification>

  <Notification definition="success" delete={true} onClickDelete={onClick}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
  </Notification>

  <Notification definition="warning" delete={true} onClickDelete={onClick}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
  </Notification>

  <Notification definition="danger" delete={true} onClickDelete={onClick}>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
  </Notification>
 
     </>
    ).toJSON();

    expect(notifications).toMatchSnapshot();
});