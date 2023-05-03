import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { sortItems } from '../redux/Actions/itemAction'
export default function DropdownComponent(props: any) {
    let sortTypes: string[] = ["Original", "Price", "Favourite"]
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    sortTypes.map((e: string) => <Dropdown.Item href="#" onClick={(event) => {
                        props.dispatch(sortItems(e))
                    }}>{e}</Dropdown.Item>)
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}
