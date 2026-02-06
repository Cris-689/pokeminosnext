'use client';
import { useLanguage } from "../context/LanguajeContext";
import { Dropdown, NavItem, Nav } from 'react-bootstrap';
import Link from 'next/link';

function NAVARRA() {
  const { setIdioma, dict } = useLanguage();

  return (
    <Nav as="ul" className="justify-content-center bg-white border border-danger rounded shadow-sm p-3 my-3">
      <Nav.Item as="li">
        <Nav.Link as={Link} href="/inicio" className='fw-bold text-danger'>
          {dict.home}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} href="/contacto" className='fw-bold text-danger'>
          {dict.contact}
        </Nav.Link>
      </Nav.Item>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" className="text-decoration-none fw-bold text-danger">
          {dict.generation}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} href='/gen1'>{dict.gen1}</Dropdown.Item>
          <Dropdown.Item as={Link} href='/gen2'>{dict.gen2}</Dropdown.Item>
              <Dropdown.Toggle variant="link" className="text-decoration-none fw-bold text-danger">
            {dict.generation}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} href='/gen3'>{dict.gen3}</Dropdown.Item>
              <Dropdown.Item as={Link} href='/gen4'>{dict.gen4}</Dropdown.Item>
            </Dropdown.Menu>
          {/* <Dropdown.Item as={Link} href='/gen3'>{dict.gen3}</Dropdown.Item>
          <Dropdown.Item as={Link} href='/gen4'>{dict.gen4}</Dropdown.Item>
          <Dropdown.Item as={Link} href='/gen5'>{dict.gen5}</Dropdown.Item>
          <Dropdown.Item as={Link} href='/gen6'>{dict.gen6}</Dropdown.Item>
          <Dropdown.Item as={Link} href='/gen7'>{dict.gen7}</Dropdown.Item>
          <Dropdown.Item as={Link} href='/gen8'>{dict.gen8}</Dropdown.Item>
          <Dropdown.Item as={Link} href='/gen9'>{dict.gen9}</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>

      <div className="ms-3 d-flex align-items-center gap-2">
        <button onClick={() => setIdioma('es')} className="btn btn-sm btn-outline-danger">ES</button>
        <button onClick={() => setIdioma('en')} className="btn btn-sm btn-outline-danger">EN</button>
        <button onClick={() => setIdioma('fr')} className="btn btn-sm btn-outline-danger">FR</button>
      </div>
    </Nav>
  );
}

export default NAVARRA;