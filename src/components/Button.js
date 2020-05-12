import React from 'react'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'

const Button = styled.button(({ isPrimary, isSecondary, isSmall, theme }) => [
	css({
		color: 'grey'
	})
])

const StyledButton = props => <Button {...props} />

export default StyledButton
