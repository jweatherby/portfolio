import styled from 'styled-components'


export const Row = styled.div(({
    alignStart=false, alignEnd=false
}) => `
    display: flex;
    justify-content: ${alignStart ? 'flex-start' : (alignEnd ? 'flex-end' : 'space-between')}
`)