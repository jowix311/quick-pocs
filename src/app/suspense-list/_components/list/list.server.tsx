import { getList } from "./list.actions";

export const ListServer = async () => {

    const data = await getList();
     
    return (<p>The value: {Math.random()} {data}</p>)
}