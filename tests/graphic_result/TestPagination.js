import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import Pagination from './components/Pagination';
import Columns from './components/Columns';
import Column from './components/Column';

var onClickItem = () => {
  alert("Clicked");
}

var itens = [
  { value: 1, href: "https://pt-br.reactjs.org/docs/hooks-overview.html", definition: "is-current", onClick: onClickItem },
  { value: 2, href: "https://pt-br.reactjs.org/docs/hooks-effect.html"},
  { value: 3, href: "https://pt-br.reactjs.org/docs/hooks-effect.html"}
]

ReactDOM.render(
  <Columns>
    <Column definition="is-half">
      <div className="container is-fluid"> 
      <br></br>
      <Pagination itens={itens} next_name="Next" previous_name="Previous"></Pagination>
      <Pagination itens={itens} next_name="Next" previous_name="Previous" previous_disabled={true}></Pagination>
      <Pagination itens={itens} next_name="Next" previous_name="Previous" previous_disabled={true} next_disabled={true}></Pagination>
      <Pagination definition="is-center" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
      <Pagination definition="is-right" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
      <Pagination definition="is-right is-rounded" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
      
      <Pagination definition="is-right is-small" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
      <Pagination definition="is-right is-medium" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
      <Pagination definition="is-right is-large" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
      </div>
    </Column>

  </Columns>
  ,
  document.getElementById('root'));


  /*
 <Pagination
        itens={itens}
        href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html"
        href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"
        next_name="Previous"
        previous_name="Next"
        previous_disabled={true}
        next_disabled={true}
      />

      <Pagination definition="center" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="center rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />

      <Pagination definition="small" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="small center" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="small right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="small rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="small center rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="small right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />

      <Pagination definition="medium" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="medium center" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="medium right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="medium rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="medium center rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="medium right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />

      <Pagination definition="large" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="large center" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="large right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="large rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="large center rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="large right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />

  */