import React from 'react';
import ProgressBar from '../biblioteca/elements/ProgressBar';
import renderer from 'react-test-renderer';
import Title from '../biblioteca/elements/Title';
import SubTitle  from '../biblioteca/elements/Subtitle';


test('test title between 1 and 6',()=>{
    const group_titles = renderer.create(
        <>
            <Title definition={1}> Título 1</Title>
            <Title definition={2}> Título 2</Title>
            <Title definition={3}> Título 3</Title>
            <Title definition={4}> Título 4</Title>
            <Title definition={5}> Título 5</Title>
            <Title definition={6}> Título 6</Title>
        </>
    ).toJSON();

    expect(group_titles).toMatchSnapshot();
})

test('test subtitle between 1 and 6',()=>{
    const group_subtitles = renderer.create(
        <>
            <SubTitle definition={1}> Título 1</SubTitle>
            <SubTitle definition={2}> Título 2</SubTitle>
            <SubTitle definition={3}> Título 3</SubTitle>
            <SubTitle definition={4}> Título 4</SubTitle>
            <SubTitle definition={5}> Título 5</SubTitle>
            <SubTitle definition={6}> Título 6</SubTitle>
        </>
    ).toJSON();
    
    expect(group_subtitles).toMatchSnapshot();
})

test('test title between 1 and 6 using p',()=>{
    const group_title_p = renderer.create(
        <>
            <Title p={true} definition={1}> Título 1</Title>
            <Title p={true} definition={2}> Título 2</Title>
            <Title p={true} definition={3}> Título 3</Title>
            <Title p={true} definition={4}> Título 4</Title>
            <Title p={true} definition={5}> Título 5</Title>
            <Title p={true} definition={6}> Título 6</Title>
        </>
    ).toJSON();
    
    expect(group_title_p).toMatchSnapshot();
})

test('test and subtitle using spaced',()=>{
    const spaced = renderer.create(
        <>
            <Title p={true} definition={1} spaced={true}>Title 1</Title>
            <SubTitle p={true} definition={3}>Subtitle 3</SubTitle>
            <Title p={true} definition={2}>Title 2</Title>
            <SubTitle p={true} definition={4}>Subtitle 4</SubTitle>
            <Title p={true} definition={3}>Title 3</Title>
            <SubTitle p={true} definition={5}>Subtitle 5</SubTitle>
        </>
    ).toJSON();
    
    expect(spaced).toMatchSnapshot();
})

