import React, { memo, useState, useEffect } from "react";
import axios from 'axios';
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/douglaslb/repos")
      .then(({ data }) => {
        const repositories = data.filter(repo => repo.name.includes('won') && repo)
        setRows(repositories)
      })
      .catch(e => strapi.notification.error("Ops... GitHub API limit exceeded :("))
  }, []);

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: "Won Games Repositories" }}
        content="A list of our repositories"
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
