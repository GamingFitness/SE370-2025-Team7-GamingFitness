/*package com.example.servingwebcontent;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "app_users")
public interface UserRepository extends PagingAndSortingRepository<User, Long>, CrudRepository<User,Long> {

  List<User> findByUserName(@Param("userName") String userName);

}
*/ 
