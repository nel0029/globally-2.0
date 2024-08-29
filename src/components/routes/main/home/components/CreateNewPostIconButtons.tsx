import IconButton from "./IconButton";
import { ActionButtonsGroup } from "./style";
import { IoImage, IoList } from "react-icons/io5";

const CreateNewPostIconButtons = () => {
  return (
    <ActionButtonsGroup>
      <IconButton icon={<IoImage />} />
      <IconButton icon={<IoList />} />
    </ActionButtonsGroup>
  );
};

export default CreateNewPostIconButtons;
