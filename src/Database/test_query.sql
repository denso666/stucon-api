insert into User values 
(0, 'Felipe Alejandro Jimenez Castillo', 'felipe.jimenez@alumnos.udg.mx','test', 'STUDENT', 1),
(0, 'Arturo Icarriaga Ortega Dominguez', 'inte.test@idevelop.com','test', 'COMPANY', 1),
(0, 'root', 'root@root.com','test', 'ROOT', 1);

insert into Student values
(1, '215671386','INCO', 7);

insert into Company values
(2, '284763450','Eléctronica', 'Empresa dediaca al desarrollo de hardware');

insert into Vacant values 
(0, 2, 'Ingeniero en hardware', 'Desarrollo de hardware con lenguajes de descripcion', 'Eléctronica',now(), 1),
(0, 2, 'Desarrollo de páginas WEB', 'Persona con conocimiento en desarrollo de sistemas web', 'Informatica',now(), 1),
(0, 2, 'Desarrollo de bajo nivel', 'Persona con minimo 3 años de desarrollo en ensamblador x86_64', 'Eléctronica',now(), 1);