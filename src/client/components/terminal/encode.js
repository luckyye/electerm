/**
 * encode support
 * It can be one of the following values:

The recommended encoding for the Web: 'utf-8'.
The legacy single-byte encodings: 'ibm866', 'iso-8859-2', 'iso-8859-3', 'iso-8859-4', 'iso-8859-5', 'iso-8859-6', 'iso-8859-7', 'iso-8859-8'', 'iso-8859-8i', 'iso-8859-10', 'iso-8859-13', 'iso-8859-14', 'iso-8859-15', 'iso-8859-16', 'koi8-r', 'koi8-u', 'macintosh', 'windows-874', 'windows-1250', 'windows-1251', 'windows-1252', 'windows-1253', 'windows-1254', 'windows-1255', 'windows-1256', 'windows-1257', 'windows-1258', or 'x-mac-cyrillic'.
The legacy multi-byte Chinese (simplified) encodings: 'gbk', 'gb18030', and 'hz-gb-2312'.
The legacy multi-byte Chinese (traditional) encoding: 'big5'.
The legacy multi-byte Japanese encodings: 'euc-jp', 'iso-2022-jp', and 'shift-jis'.
The legacy multi-byte Korean encodings: 'euc-kr', and 'iso-2022-kr'.
The legacy miscelleanous encodings: 'utf-16be', 'utf-16le', and 'x-user-defined'.
A special encoding, 'replacement', which only emits an error and an EOF code point. It is used to prevent attacks that mismatch encodings between the client and server. It can happen with ISO-2022-CN and ISO-2022-CN-ext.

 */