PGDMP                      }            123    17.5    17.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16387    123    DATABASE     y   CREATE DATABASE "123" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "123";
                     postgres    false            �            1259    16418    typeitem    TABLE     q   CREATE TABLE public.typeitem (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    img text
);
    DROP TABLE public.typeitem;
       public         heap r       postgres    false            �            1259    16421    typeitem_id_seq    SEQUENCE     �   CREATE SEQUENCE public.typeitem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.typeitem_id_seq;
       public               postgres    false    227            �           0    0    typeitem_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.typeitem_id_seq OWNED BY public.typeitem.id;
          public               postgres    false    228            8           2604    16433    typeitem id    DEFAULT     j   ALTER TABLE ONLY public.typeitem ALTER COLUMN id SET DEFAULT nextval('public.typeitem_id_seq'::regclass);
 :   ALTER TABLE public.typeitem ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    228    227            �          0    16418    typeitem 
   TABLE DATA           1   COPY public.typeitem (id, name, img) FROM stdin;
    public               postgres    false    227   �
       �           0    0    typeitem_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.typeitem_id_seq', 43, true);
          public               postgres    false    228            :           2606    16448    typeitem typeitem_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.typeitem
    ADD CONSTRAINT typeitem_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.typeitem DROP CONSTRAINT typeitem_pkey;
       public                 postgres    false    227            �   �   x�M��j�@F�3O����;f�wq�d�4PC� ��g�Bh)-t�E���B�P_�7�Tmuqw��P����h��L��c�$#%�x(���W�2���ѯ��T*E�p��rgH����y��_ܠ�~��:g뱋�ג�-�~7�i)���qeqf����'�B��>�����֑DZGc�nh/bx����kR���~Sl}��F���.o�     