package com.rodrigocae.rcsvenda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rodrigocae.rcsvenda.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
