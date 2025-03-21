import { CloseButton } from "../AgreeModal/AgreeModalStyles";
import register_icon from "../../images/modal_goal_register.png";
import ModalsSmallBackground from "./ModalsSmallBackground";
import { useNavigate } from "react-router-dom";

interface GoalRegisterProps {
  isGoalEdit?: boolean; // true: 수정, false: 등록
  onClose: () => void;
}

export default function GoalRegister(props: GoalRegisterProps) {
  const { isGoalEdit, onClose } = props;
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/calendar");
  };

  return (
    <ModalsSmallBackground onClose={handleClose}>
      <CloseButton onClick={handleClose} title="닫기">
        ✖
      </CloseButton>
      <img
        src={register_icon}
        alt="Goal Registeration Confirmation"
        style={{ width: "35%" }}
      />

      <h2>
        {isGoalEdit
          ? "목표 수정이 완료되었습니다"
          : "목표 등록이 완료되었습니다"}
      </h2>
    </ModalsSmallBackground>
  );
}
