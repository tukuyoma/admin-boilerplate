import React from 'react'
import styled from 'styled-components'
import { RiErrorWarningLine } from 'react-icons/ri'
import {
  Control,
  InputTitle,
  Must,
  InputField,
  InputError,
  ErrorIcon,
} from '../../shared/form-styles'

export default function TItle({ title, setTitle, inputError, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, title: '' }))
    setTitle(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Title <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputError.title}
        placeholder="Title of post"
        value={title}
        onChange={handleChange}
      />
      {inputError.title && (
        <InputError>
          <ErrorIcon>
            <RiErrorWarningLine />
          </ErrorIcon>
          {inputError.title}
        </InputError>
      )}
    </Control>
  )
}
