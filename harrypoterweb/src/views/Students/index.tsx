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
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  SyncButton,
  InputSearch,
  ButtonSearch,
  FotterPage
} from "./styles";

const Students: FC = () => {
  const [studentsList, setStudentsList] = useState<StudentResponse[]>([]);
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const getStudentsList = useCallback(async () => {
    const students = await getStudents();
    setStudentsList(students);
  }, []);

  const handleSyncStudents = useCallback(async () => {
    await syncStudents();
    setIsLoading(false);
    getStudentsList();
  }, []);

  const handleClickSearch = useCallback(async () => {
    setIsLoading(true);
    const characters = await getStudents();
    setStudentsList(characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase())));  
    setIsLoading(false);
  }, [name])

  useEffect(() => {
    getStudentsList();
  }, [getStudentsList]);

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
      <SyncButton onClick={handleSyncStudents}>Sync Students</SyncButton>
      <ButtonContainer>
      <InputSearch type="text" value={name} placeholder="Find your favorite character..." onChange={(e) => setName(e.target.value)} />
        <ButtonSearch onClick={handleClickSearch}>🔍</ButtonSearch>
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
      <FotterPage>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </FotterPage>
    </App>
  );
};

export default memo(Students);
