import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardChar from "../../components/Card";
import Navbar from "../../components/Navbar";
import {
  getStudents,
  removeStudent,
  StudentResponse,
  syncStudents,
} from "../../services/api/students";
import {
  MaxContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  SyncButton,
  InputSearch,
  ButtonSearch,
  ButtonRemove
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

  const handleRemoveStudent = useCallback(async (id: string) => {
    setIsLoading(true);
    await removeStudent(id);
    setStudentsList((prev) => prev.filter((item) => item.id !== id));
    setIsLoading(false);
  }, []);


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
    <MaxContainer>
        <Navbar/>
      <SyncButton onClick={handleSyncStudents}>Sync Students</SyncButton>
      <InputSearch type="text" value={name} placeholder="Find your favorite character..." onChange={(e) => setName(e.target.value)} />
        <ButtonSearch onClick={handleClickSearch}>🔍</ButtonSearch>
      <Container>
        {studentsList
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((student, index) => (
            <div key={index}>
              <CardChar
                image={student.image}
                name={student.name}
                house={student.house}
                id={student.id}
                type="students"
              />
              <ButtonRemove onClick={() => handleRemoveStudent(student.id)}>DELETE</ButtonRemove>
            </div>
          ))}
      </Container>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
    </MaxContainer>
  );
};

export default memo(Students);
