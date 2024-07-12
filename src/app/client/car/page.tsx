'use client'

import React from 'react'
import type { NextPage } from "next";
import { useState } from "react";
import Views from "../components/Views";
import { Title } from "../components/Title";
import { Caracteristics1 } from "../components/Caracteristics1";
import { Caracteristics2 } from "../components/Caracteristics2";
import { Caracteristics3 } from "../components/Caracteristics3";
import { Caracteristics4 } from "../components/Caracteristics4";
import { Content1 } from "../components/content1";
import LocationForm from "../components/LocationForm";
import styled, { keyframes } from "styled-components";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const page = () => {
  const [showLocationForm, setShowLocationForm] = useState(false);

  const toggleLocationForm = () => {
    setShowLocationForm(!showLocationForm);
  };
  // const router = useRouter();

  // useEffect(() => {
  //   // Récupération des props depuis l'URL
  //   const { name, prix } = router.query;

  //   // Faites quelque chose avec name et prix, par exemple, affichez-les
  //   console.log('Nom du véhicule:', name);
  //   console.log('Prix du véhicule:', prix);
  // }, []);

  return (
     <Container>
      <Content1 />
      <Views />
      <Title />
      <Caracteristics1 />
      <Caracteristics2 />
      <Caracteristics3 />
      <ButtonContainer>
        <RentalButton onClick={toggleLocationForm}>
          <ButtonText>Réserver ce véhicule</ButtonText>
          <ButtonIcon>🚘</ButtonIcon>
        </RentalButton>
      </ButtonContainer>
      {showLocationForm && (
        <SlideIn>
          <LocationForm />
        </SlideIn>
      )}
      <Caracteristics4 />
    </Container>
  )
}

export default page;


const Container = styled.div`
  background-color: #f5f5f0;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ButtonText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const ButtonIcon = styled.span`
  font-size: 1.5rem;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const RentalButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SlideIn = styled.div`
  animation: ${slideIn} 0.5s ease-in-out;
`;



