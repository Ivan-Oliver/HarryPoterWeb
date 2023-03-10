import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { StaffResponse, getStaff, syncStaff } from "../../services/api/staff";
import {
  App,
  ButtonBack,
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  DeleteButton,
  SyncButton,
} from "./styles";

const Staffs: FC = () => {
  const [staffList, setStaffList] = useState<StaffResponse[]>([]);
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const getStaffList = useCallback(async () => {
    const staff = await getStaff();
    setStaffList(staff);
  }, []);

  const syncData = useCallback(async () => {
    await syncStaff();
    setIsLoading(false);
    getStaffList();
  }, []);

  useEffect(() => {
    getStaffList();
  }, [getStaffList]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };
  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  if (loading) {
    return <h1>LOADING</h1>;
  }

  return (
    <App>
      <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      <SyncButton onClick={syncData}>Sync Staff</SyncButton>
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </ButtonContainer>
      <Container>
        {staffList
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((staff, index) => (
            <div key={index}>
              <Card
                key={index}
                name={staff.name}
                house={staff.house}
                id={staff.id}
                type="staff"
              />
            </div>
          ))}
      </Container>
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </ButtonContainer>
    </App>
  );
};

export default memo(Staffs);