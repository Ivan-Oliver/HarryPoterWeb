import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import {
  getStudents,
  StudentResponse,
  syncStudents,
} from "../../services/api/students";
import {
  App,
  ButtonBack,
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  SyncButton,
} from "./styles";

const Students: FC = () => {
  const [studentsList, setStudentsList] = useState<StudentResponse[]>([]);
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getStudentsList = useCallback(async () => {
    const students = await getStudents();
    setStudentsList(students);
  }, []);

  const handleSyncStudents = useCallback(async () => {
    await syncStudents();
    setIsLoading(false);
    getStudentsList();
  }, []);


  useEffect(() => {
    getStudentsList();
  }, [getStudentsList]);


  const handleGoToBack = useCallback(() => {
    navigate("/categories", { replace: true });
  }, [navigate]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };
  if (isloading) {
    return <h1>LOADING</h1>;
  }

  return (
    <App>
        <Navbar/>
      <ButtonBack onClick={handleGoToBack}>Go Back!</ButtonBack>
      <SyncButton onClick={handleSyncStudents}>Sync Students</SyncButton>
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </ButtonContainer>
      <Container>
        {studentsList
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((student, index) => (
            <div key={index}>
              <Card
                image={student.image}
                name={student.name}
                house={student.house}
                id={student.id}
                type="students"
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

export default memo(Students);
