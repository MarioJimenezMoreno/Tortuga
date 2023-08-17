package com.Tortuga.SpringBoot.DAO;

import com.Tortuga.SpringBoot.Interfaces.UserTasksDAO;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class UserTasksDAOImp implements UserTasksDAO {
}
