import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import MenuItemList from '../components/MenuItemList'
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchMenu, fetchTypes } from "../http/menuitemAPI";

const Rest = observer(() => {
  const { menuitem } = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => menuitem.setTypes(data))
    fetchMenu(null).then(data => menuitem.setMenu(data))
  }, [])

  useEffect(() => {
    fetchMenu(menuitem.selectedType.id).then(data => {
      menuitem.setMenu(data)
    })
  }, [menuitem.selectedType])

  return (
    <Container className='custContainerFlex'>
      <Row>
        
        <TypeBar />
        <MenuItemList/>
      </Row>
    </Container>
  )
})

export default Rest
