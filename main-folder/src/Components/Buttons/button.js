import { Component } from 'react';
import { Button, ButtonListContainer, ColorHeadingContainer, ColorPicker, ColorPickerContainer, ColorValue, DirectionHeading, Heading } from './buttonStyle';

const buttonList = [
    {
        id: 1,
        name: 'Top',
        property: 'top'
    },
    {
        id: 2,
        name: 'Bottom',
        property: 'bottom'
    },
    {
        id: 3,
        name: 'Right',
        property: 'right'
    },
    {
        id: 4,
        name: 'Left',
        property: 'left'
    },
]
class ButtonContainer extends Component {

    state = {
        color1: '#76e5dd',
        color2: '#9bd4f8',
        gradientType: 'top',
    }
    onClickGradientButton = (event) => {
        this.setState({ gradientType: event.target.id })
    }
    onChangeColor1 = (event) => {
        this.setState({ color1: event.target.value })
    }
    onChangeColor2 = (event) => {
        this.setState({ color2: event.target.value })
    }
    render() {
        const { onGenerate } = this.props
        const { color1, color2, gradientType } = this.state
        const generate = () => {
            onGenerate(color1, color2, gradientType)
        }
        return (
            <>
                <Heading>Generate a CSS Color Gradient</Heading>
                <DirectionHeading>Choose Direction</DirectionHeading>
                <ButtonListContainer>
                    {buttonList.map(button => {
                        return <Button isActive={gradientType===button.property} onClick={this.onClickGradientButton} id={button.property}>{button.name}</Button>
                    })}
                </ButtonListContainer>
                <DirectionHeading>Pick the Colors</DirectionHeading>
                <ColorPickerContainer>
               <ColorHeadingContainer>
                <ColorValue>{color1}</ColorValue>
                <ColorPicker value={color1} onChange={this.onChangeColor1} type={'color'} /></ColorHeadingContainer>
                <ColorHeadingContainer>
                <ColorValue>{color2}</ColorValue>
                <ColorPicker value={color2} onChange={this.onChangeColor2} type={'color'} /></ColorHeadingContainer></ColorPickerContainer>
                <button onClick={generate}>Generate</button>
            </>
        )
    }
}

export default ButtonContainer;
