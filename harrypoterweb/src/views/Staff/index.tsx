import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardChar from "../../components/Card";
import Navbar from "../../components/Navbar";
import { getStaff, syncStaff,StaffResponse, removeStaff } from "../../services/api/staff";
import {
  App,
  FotterPage,
  ButtonNext,
  ButtonPreview,
  Container,
  SyncButton,
  InputSearch,
  ButtonSearch,
  ButtonRemove
} from "./styles";

const Staffs: FC = () => {
  const [staffList, setStaffList] = useState<StaffResponse[]>([]);
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("")

  const getStaffList = useCallback(async () => {
    const staff = await getStaff();
    setStaffList(staff);
  }, []);

  const handleSyncStaff = useCallback(async () => {
    await syncStaff();
    setIsLoading(false);
    getStaffList();
  }, []);

  const handleClickSearch = useCallback(async () => {
    setIsLoading(true);
    const characters = await getStaff();
    setStaffList(characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase())));  
    setIsLoading(false);
  }, [name])

  const handleRemoveStaff = useCallback(async (id: string) => {
    setIsLoading(true);
    await removeStaff(id);
    setStaffList((prev) => prev.filter((item) => item.id !== id));
    setIsLoading(false);
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

  if (loading) {
    return <h1>LOADING</h1>;
  }

  return (
    <App>
      <Navbar/>
      <SyncButton onClick={handleSyncStaff}>Sync Staff</SyncButton>
      <InputSearch type="text" value={name} placeholder="Find your favorite character..." onChange={(e) => setName(e.target.value)} />
        <ButtonSearch onClick={handleClickSearch}>🔍</ButtonSearch>

      <Container>
        {staffList
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((staff, index) => (
            <div key={index}>
              <CardChar
                key={index}
                image={staff.image}
                name={staff.name}
                house={staff.house}
                id={staff.id}
                type="staff"
              />
            <ButtonRemove onClick={() => handleRemoveStaff(staff.id)}>DELETE</ButtonRemove>

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

export default memo(Staffs);
