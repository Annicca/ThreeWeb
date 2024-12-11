package ru.konkurs.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.konkurs.demo.models.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Integer> {
    Profile getByLogin(@Param("login") String loginUser);
}
