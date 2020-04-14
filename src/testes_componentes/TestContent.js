import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
import './css/all.js';
import List from './biblioteca/elements/List';
import Content from './biblioteca/elements/Content';


ReactDOM.render(
  <div className="container is-fluid">
  <Content definition="small">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <h2>Second Level</h2>
            <p>
                Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
            </p>
            <ul>
                <li>
                    In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                </li>
                <li>
                    In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                </li>
                <li>
                    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
                </li>
                <li>
                    Ut non enim metus.
                </li>
            </ul>
        </Content>
        <Content definition="medium">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <h2>Second Level</h2>
            <p>
                Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
            </p>
            <ul>
                <li>
                    In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                </li>
                <li>
                    In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                </li>
                <li>
                    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
                </li>
                <li>
                    Ut non enim metus.
                </li>
            </ul>
        </Content>

        <Content definition="large">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <h2>Second Level</h2>
            <p>
                Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
            </p>
            <ul>
                <li>
                    In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                </li>
                <li>
                    In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                </li>
                <li>
                    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
                </li>
                <li>
                    Ut non enim metus.
                </li>
            </ul>
        </Content>
  
  
  </div>

   
,
  document.getElementById("root"))
