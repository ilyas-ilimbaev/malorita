--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-06-04 23:04:17

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 227 (class 1259 OID 16418)
-- Name: typeitem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeitem (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    img text
);


ALTER TABLE public.typeitem OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16421)
-- Name: typeitem_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.typeitem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.typeitem_id_seq OWNER TO postgres;

--
-- TOC entry 4819 (class 0 OID 0)
-- Dependencies: 228
-- Name: typeitem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.typeitem_id_seq OWNED BY public.typeitem.id;


--
-- TOC entry 4664 (class 2604 OID 16433)
-- Name: typeitem id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeitem ALTER COLUMN id SET DEFAULT nextval('public.typeitem_id_seq'::regclass);


--
-- TOC entry 4812 (class 0 OID 16418)
-- Dependencies: 227
-- Data for Name: typeitem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.typeitem (id, name, img) FROM stdin;
1	Напитки	1749057796932-drink.webp
2	Супы	1749057812230-soups.webp
3	Десерты	1749057823230-desserts.jpg
4	Закуски	1749057837341-zakuski.jpg
5	Горячие блюда	1749057851334-hot-dishes.jpg
6	Бургеры	1749057866778-burgers.webp
\.


--
-- TOC entry 4820 (class 0 OID 0)
-- Dependencies: 228
-- Name: typeitem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.typeitem_id_seq', 43, true);


--
-- TOC entry 4666 (class 2606 OID 16448)
-- Name: typeitem typeitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeitem
    ADD CONSTRAINT typeitem_pkey PRIMARY KEY (id);


-- Completed on 2025-06-04 23:04:17

--
-- PostgreSQL database dump complete
--

