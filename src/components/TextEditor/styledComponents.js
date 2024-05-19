import styled from 'styled-components'

export const Heading = styled.h1`
  fontfamily: 'Roboto';
  color: white;
  text-align:center;
  padding-top: 10px;
  font-size: 20px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const Image = styled.img`
  height: 200px;
  width: 200px;
`
export const ImageElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`
export const EditorContainer = styleddiv`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color:  #25262c;
  min-height: 50vh;
  min-width: 25vh;
  margin-left: 30px;
  border: 1px solid #cbd5e1;
`
export const HrElement = styled.hr`
   color:#cbd5e1;
   width: 100%;
   border-radius: 2px;
`
export const ButtonContainer = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 10px;
    padding-left: 0px
`
export const TextAreaElement = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 20px;
  color:#f1f5f9;
  font-size: 15px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`