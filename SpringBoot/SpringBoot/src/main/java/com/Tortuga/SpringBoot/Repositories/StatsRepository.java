package com.Tortuga.SpringBoot.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Tortuga.SpringBoot.Models.Stats;





public interface StatsRepository extends JpaRepository<Stats, Integer>{}

