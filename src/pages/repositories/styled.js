import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    max-width: 995px;
    margin: 0 auto;
    width: 100%;
`

export const Title = styled.h1`
    font-family: sans-serif;
    font-size: 1.5rem;
    text-align: center;
    color: #555;
`

export const List = styled.ul`
    list-style: none;
`

export const listItem = styled.li`
    background: #333;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-family: sans-serif;
`

export const linkHome = styled(Link)`
    background: #333;
    color: white;
    padding: 10px;
    text-align: center;  
    margin: 0 auto;
    display: block;
    width: 4rem;
    border-radius: 5px;
    text-decoration: none;
    font-family: sans-serif;
`