import { ChildAsFC } from './Child';


const Parent = () => {
    return (
        <ChildAsFC color="blue" onClick={() => console.log("Clicked")}>
            YoYOYo
        </ChildAsFC >
    );
};
export default Parent;

