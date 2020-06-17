// @flow
import * as React from 'react';
import Image from './Image';
import Content from './Content';
import Button from './Button';
import Level from './Level';

type Props = {
     definition?:string,
    image_definition?: string,
    figure_definition?: string,
    content_definition?: string,
    children?: React.Node,
    src?:string,
    right_element?: React.Node,
    onClickDelete?: ()=> void

}

const MediaObject = (props:Props)=>{
    return  <article class="media">
                {assembleLeftMedia(props)}
                {assembleContentMedia(props)}
                {assembleRightMedia(props)}
            </article>
}

function assembleLeftMedia(props: Props){
    return  <figure class="media-left">
        <Image definition={props.figure_definition} image_definition={props.image_definition} src={props.src}/>
  </figure>
}

function assembleContentMedia(props: Props){
    return <div class="media-content">
                <Content definition={props.content_definition}>
                     {props.children}
                </Content>
                {assembleDefaultLevel(props)}
            </div>
}   

function assembleDefaultLevel(props: Props){
    return <Level itens={props.itens}> 
    
            </Level>
}

function assembleRightMedia(props: Props){
    return <div class="media-right">
                {props.right_element != undefined ? props.right_element : <Button onClick={props.onClickDelete} delete={true}> </Button>
                }
            </div>
}


export default MediaObject;