import {useRef} from 'react';

export default function SearchBar(props){
    const input = useRef(null);
    const handleChange = ()=>{
        const filtered = props.filter(park =>{
            return park.data[0].fullName.toLowerCase().includes(input.current.value.toLower.Case())
        })
    }
}