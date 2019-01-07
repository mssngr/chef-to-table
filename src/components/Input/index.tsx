import React from 'react'
import styled from 'styled-components'
import Color from 'color'
import InputMask from 'react-input-mask'

import { colors } from '../../common'

/* STYLES */
const makeTransparent = (color: string) =>
  Color(color)
    .fade(0.2)
    .rgb()
    .string()

const Container = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  font-size: 1.1rem;

  &,
  input {
    font-weight: 300;
  }
`

const StyledInput = styled<any>('input')`
  width: 100%;
  padding: 0.6rem calc(1rem + ${props => props.prefixPadding});
  background-color: ${makeTransparent(colors.gray1)};
  border: 1px solid ${makeTransparent(colors.gray2)};
  border-radius: 4px;
  color: ${colors.teal};

  :focus {
    outline: none;
  }
`

const Prefix = styled.span`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: ${colors.gray3};
`

export const InputGroup = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`

/* PRESENTATION */
interface InputProps {
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: () => void
  onBlur?: () => void
  onMouseDown?: () => void
  onPaste?: () => void
  disabled?: boolean
  readOnly?: boolean
}

interface RemainingInputProps {
  type?: string
  placeholder?: string
  prefix?: string
  prefixPadding?: string
}

class InputElement extends React.Component<InputProps & RemainingInputProps> {
  render() {
    const { prefix, ...otherProps } = this.props
    return (
      <Container>
        <StyledInput {...otherProps} />
        {prefix && <Prefix>{prefix}</Prefix>}
      </Container>
    )
  }
}

export default class Input extends React.Component<
  InputProps &
    RemainingInputProps & {
      mask?: string
      maskChar?: string | null
      alwaysShowMask?: boolean
    }
> {
  static defaultProps = {
    type: 'text',
  }

  render() {
    const {
      type,
      placeholder,
      prefix,
      prefixPadding,
      mask,
      maskChar,
      alwaysShowMask,
      ...otherProps
    } = this.props

    if (mask) {
      return (
        <InputMask
          mask={mask}
          maskChar={maskChar}
          alwaysShowMask={alwaysShowMask}
          {...otherProps}
        >
          {(inputProps: InputProps) => (
            <InputElement
              type={type}
              placeholder={placeholder}
              prefix={prefix}
              prefixPadding={prefixPadding}
              {...inputProps}
            />
          )}
        </InputMask>
      )
    }
    return (
      <InputElement
        type={type}
        placeholder={placeholder}
        prefix={prefix}
        prefixPadding={prefixPadding}
        {...otherProps}
      />
    )
  }
}
