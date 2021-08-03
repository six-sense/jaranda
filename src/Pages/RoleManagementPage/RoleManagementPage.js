import React, { useState } from 'react';
import testData from 'utils/testData.json';
import { style } from './RoleManagementPageStyle';

const properties = [
  { label: '부모님만 이용 가능 페이지', value: '부모님만 이용 가능 페이지' },
  { label: '자란다 선생님 보기', value: '자란다 선생님 보기' },
];

function RoleManagementPage() {
  const [filteredData, setFilteredData] = useState([...testData]);
  const [role, setRole] = useState('');

  const onSelectChange = (e) => {
    setRole(e.target.value);
    const matchValue = testData.filter((data) =>
      data.role.includes(e.target.value),
    );
    setFilteredData(matchValue);
  };

  // role에 따른 역할 설정은 localStorage에
  // 실제 값이 들어온 다음에 진행 예정

  //   const onSubmitRoleManagement = () => {
  //     if(role === '선생님')
  //     else if(role === '부모님')
  //     else (role === '학생')
  //   };

  return (
    <div>
      <TableContainer>
        <TableHeader>
          <TableTitle>역할 별 전체 권한 설정</TableTitle>
          <SelectContainer>
            <SelectBox onChange={onSelectChange}>
              <option value="">역할 설정</option>
              <option value="선생님">선생님</option>
              <option value="부모님">부모님</option>
              <option value="학생">학생</option>
            </SelectBox>
          </SelectContainer>
        </TableHeader>
        <table>
          <thead>
            <tr>
              <Cell>Role</Cell>
              <Cell>Page Authentication</Cell>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(
              (data, index) =>
                data.role !== 'admin' && (
                  <tr key={index}>
                    <Cell>{data.role}</Cell>
                    <Cell>
                      <div key={index}>
                        {properties.map((property, index) => (
                          <RoleButton key={index}>{property.label}</RoleButton>
                        ))}
                      </div>
                    </Cell>
                  </tr>
                ),
            )}
          </tbody>
        </table>
        <TableFooter>
          <div>
            <RoleButton
            // onClick={onSubmitRoleManagement}
            >
              {role} 페이지 권한 확정
            </RoleButton>
          </div>
        </TableFooter>
      </TableContainer>
    </div>
  );
}

export default RoleManagementPage;

const {
  TableHeader,
  RoleButton,
  SelectBox,
  TableFooter,
  Cell,
  SelectContainer,
  TableContainer,
  TableTitle,
} = style;
