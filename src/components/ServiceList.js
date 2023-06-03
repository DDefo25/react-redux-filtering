import { useSelector, useDispatch } from "react-redux";
import {removeService, changeServiceField, clearServiceField, changeFilterField, clearFilterField} from './actions/actions'

export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const filterField = useSelector(state => state.serviceFilterField);
    const dispatch = useDispatch();

    
    const handleRemove = o => {
        dispatch(removeService(o.id)) 
        Object.keys(o).forEach((name) => dispatch(clearServiceField(name)))
    }

    const handleEdit = (o) => Object.entries(o).forEach(([name, value]) => dispatch(changeServiceField(name, value)))
    
    const handleFilter = (evt) => {
        const {name, value} = evt.target;
        dispatch(changeFilterField(name, value))
    }

    const handleFilterClear = () => {
        Object.keys(filterField).forEach((name) => dispatch(clearFilterField(name)))
    }

    return (
        <>  <div className="position-relative m-3">
                <input type="text" className="form-control" name='name' onChange={handleFilter} value={filterField.name} />
                <i className="bi bi-x position-absolute top-50 end-0 translate-middle-y" onClick={handleFilterClear} />
            </div>
            <ul className="list-group list-group-flush m-3">
                {items
                    .filter(o => {
                        if (Object.keys(filterField).every(filter => filter === '')) {
                            return true
                        } else {
                            const subStr = o['name'].substring(0, filterField['name'].length);
                            const compare = subStr.localeCompare(filterField['name'], ['ru', 'en'], { sensitivity: 'base' })
                            return compare === 0
                        }
                    })
                    .map(o => (
                    <li className="list-group-item" key={o.id}>
                        {o.name} {o.price}
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(o)} />
                        <i className="bi bi-trash3" onClick={() => handleRemove(o)} />
                    </li>
                ))}
            </ul>
        </>
    )
}
