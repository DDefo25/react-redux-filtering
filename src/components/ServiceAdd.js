import { useSelector, useDispatch } from "react-redux";
import { addService, changeServiceField } from "./actions/actions";

export default function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd)
    const dispatch = useDispatch()
    const handleChange = evt => { 
        const {name, value} = evt.target; 
        dispatch( changeServiceField(name, value))
    }
    const handleSubmit = evt => { 
        evt.preventDefault();
        console.log(item)
        const {name, price} = item;
        dispatch( addService(name, price) )
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Название</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='name' onChange={handleChange} value={item.name} />
            </div>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Стоимость</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='price' onChange={handleChange} value={item.price} />
            </div>
            <button type='submit' className="btn btn-primary">Сохранить</button>
        </form>
    );
}
