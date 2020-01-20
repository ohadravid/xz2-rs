var N=null,E="",T="t",U="u",searchIndex={};
var R=["Finish encoding of the current block.","A flag passed when initializing a decoder, causes…","stream","result","error","status","action","lzmaoptions","is_supported","filters","xzencoder","total_out","total_in","Creates a new decoder which will decompress data read from…","xzdecoder","new_stream","Acquires a reference to the underlying stream","Acquires a mutable reference to the underlying stream","into_inner","Returns the number of bytes that the decompressor has…","XzEncoder","XzDecoder","Creates a new encoder with a custom `Stream`.","get_ref","get_mut","Returns the number of bytes produced by the compressor…","Returns the number of bytes consumed by the compressor…","new_multi_decoder","Create a new decompression stream, which will read…","Creates a new decoder with a custom `Stream`.","Unwrap the underlying writer, finishing the compression…","Create a new compression stream which will compress at the…","Creates a new decoding stream which will decode into `obj`…","Acquires a reference to the underlying writer.","Acquires a mutable reference to the underlying writer.","Returns the number of bytes consumed by the decompressor…","xz2::stream","try_from","try_into","borrow_mut","type_id","borrow","typeid","to_owned","clone_into","xz2::bufread","xz2::read","xz2::write","matchfinder","formatter","shutdown","MatchFinder","LzmaOptions","MtStreamBuilder","lzma_options_lzma","lzma_allocator","lzma_stream","lzma_filter","lzma_stream_flags","lzma_options_bcj","lzma_internal","dict_size","nice_len","block_size"];
searchIndex["lzma_sys"]={"doc":E,"i":[[3,R[55],"lzma_sys",E,N,N],[12,"alloc",E,E,0,N],[12,"free",E,E,0,N],[12,"opaque",E,E,0,N],[3,R[56],E,E,N,N],[12,"next_in",E,E,1,N],[12,"avail_in",E,E,1,N],[12,R[12],E,E,1,N],[12,"next_out",E,E,1,N],[12,"avail_out",E,E,1,N],[12,R[11],E,E,1,N],[12,"allocator",E,E,1,N],[3,R[57],E,E,N,N],[12,"id",E,E,2,N],[12,"options",E,E,2,N],[3,"lzma_mt",E,E,N,N],[12,"flags",E,E,3,N],[12,"threads",E,E,3,N],[12,R[63],E,E,3,N],[12,"timeout",E,E,3,N],[12,"preset",E,E,3,N],[12,R[9],E,E,3,N],[12,"check",E,E,3,N],[3,R[54],E,E,N,N],[12,R[61],E,E,4,N],[12,"preset_dict",E,E,4,N],[12,"preset_dict_size",E,E,4,N],[12,"lc",E,E,4,N],[12,"lp",E,E,4,N],[12,"pb",E,E,4,N],[12,"mode",E,E,4,N],[12,R[62],E,E,4,N],[12,"mf",E,E,4,N],[12,"depth",E,E,4,N],[3,R[58],E,E,N,N],[12,"version",E,E,5,N],[12,"backward_size",E,E,5,N],[12,"check",E,E,5,N],[3,R[59],E,E,N,N],[12,"start_offset",E,E,6,N],[4,R[60],E,E,N,N],[5,"lzma_code",E,E,N,N],[5,"lzma_end",E,E,N,N],[5,"lzma_get_progress",E,E,N,N],[5,"lzma_memusage",E,E,N,N],[5,"lzma_memlimit_get",E,E,N,N],[5,"lzma_memlimit_set",E,E,N,N],[5,"lzma_easy_encoder_memusage",E,E,N,N],[5,"lzma_easy_decoder_memusage",E,E,N,N],[5,"lzma_easy_encoder",E,E,N,N],[5,"lzma_easy_buffer_encode",E,E,N,N],[5,"lzma_stream_encoder",E,E,N,N],[5,"lzma_stream_encoder_mt_memusage",E,E,N,N],[5,"lzma_stream_encoder_mt",E,E,N,N],[5,"lzma_alone_encoder",E,E,N,N],[5,"lzma_stream_buffer_bound",E,E,N,N],[5,"lzma_stream_buffer_encode",E,E,N,N],[5,"lzma_stream_decoder",E,E,N,N],[5,"lzma_auto_decoder",E,E,N,N],[5,"lzma_alone_decoder",E,E,N,N],[5,"lzma_stream_buffer_decode",E,E,N,N],[5,"lzma_check_is_supported",E,E,N,N],[5,"lzma_check_size",E,E,N,N],[5,"lzma_crc32",E,E,N,N],[5,"lzma_crc64",E,E,N,N],[5,"lzma_get_check",E,E,N,N],[5,"lzma_filter_encoder_is_supported",E,E,N,N],[5,"lzma_filter_decoder_is_supported",E,E,N,N],[5,"lzma_filters_copy",E,E,N,N],[5,"lzma_raw_encoder_memusage",E,E,N,N],[5,"lzma_raw_decoder_memusage",E,E,N,N],[5,"lzma_raw_encoder",E,E,N,N],[5,"lzma_raw_decoder",E,E,N,N],[5,"lzma_filters_update",E,E,N,N],[5,"lzma_raw_buffer_encode",E,E,N,N],[5,"lzma_raw_buffer_decode",E,E,N,N],[5,"lzma_properties_size",E,E,N,N],[5,"lzma_properties_encode",E,E,N,N],[5,"lzma_properties_decode",E,E,N,N],[5,"lzma_physmem",E,E,N,N],[5,"lzma_cputhreads",E,E,N,N],[5,"lzma_stream_header_encode",E,E,N,N],[5,"lzma_stream_footer_encode",E,E,N,N],[5,"lzma_stream_header_decode",E,E,N,N],[5,"lzma_stream_footer_decode",E,E,N,N],[5,"lzma_stream_flags_compare",E,E,N,N],[5,"lzma_version_number",E,E,N,N],[5,"lzma_version_string",E,E,N,N],[5,"lzma_vli_encode",E,E,N,N],[5,"lzma_vli_decode",E,E,N,N],[5,"lzma_vli_size",E,E,N,N],[5,"lzma_lzma_preset",E,E,N,N],[5,"lzma_mf_is_supported",E,E,N,N],[6,"lzma_bool",E,E,N,N],[6,"lzma_ret",E,E,N,N],[6,"lzma_action",E,E,N,N],[6,"lzma_check",E,E,N,N],[6,"lzma_vli",E,E,N,N],[6,"lzma_mode",E,E,N,N],[6,"lzma_match_finder",E,E,N,N],[17,"LZMA_OK",E,E,N,N],[17,"LZMA_STREAM_END",E,E,N,N],[17,"LZMA_NO_CHECK",E,E,N,N],[17,"LZMA_UNSUPPORTED_CHECK",E,E,N,N],[17,"LZMA_GET_CHECK",E,E,N,N],[17,"LZMA_MEM_ERROR",E,E,N,N],[17,"LZMA_MEMLIMIT_ERROR",E,E,N,N],[17,"LZMA_FORMAT_ERROR",E,E,N,N],[17,"LZMA_OPTIONS_ERROR",E,E,N,N],[17,"LZMA_DATA_ERROR",E,E,N,N],[17,"LZMA_BUF_ERROR",E,E,N,N],[17,"LZMA_PROG_ERROR",E,E,N,N],[17,"LZMA_RUN",E,E,N,N],[17,"LZMA_SYNC_FLUSH",E,E,N,N],[17,"LZMA_FULL_FLUSH",E,E,N,N],[17,"LZMA_FULL_BARRIER",E,E,N,N],[17,"LZMA_FINISH",E,E,N,N],[17,"LZMA_CHECK_NONE",E,E,N,N],[17,"LZMA_CHECK_CRC32",E,E,N,N],[17,"LZMA_CHECK_CRC64",E,E,N,N],[17,"LZMA_CHECK_SHA256",E,E,N,N],[17,"LZMA_MODE_FAST",E,E,N,N],[17,"LZMA_MODE_NORMAL",E,E,N,N],[17,"LZMA_MF_HC3",E,E,N,N],[17,"LZMA_MF_HC4",E,E,N,N],[17,"LZMA_MF_BT2",E,E,N,N],[17,"LZMA_MF_BT3",E,E,N,N],[17,"LZMA_MF_BT4",E,E,N,N],[17,"LZMA_TELL_NO_CHECK",E,E,N,N],[17,"LZMA_TELL_UNSUPPORTED_CHECK",E,E,N,N],[17,"LZMA_TELL_ANY_CHECK",E,E,N,N],[17,"LZMA_IGNORE_CHECK",E,E,N,N],[17,"LZMA_CONCATENATED",E,E,N,N],[17,"LZMA_PRESET_DEFAULT",E,E,N,N],[17,"LZMA_PRESET_LEVEL_MASK",E,E,N,N],[17,"LZMA_PRESET_EXTREME",E,E,N,N],[17,"LZMA_DICT_SIZE_MIN",E,E,N,N],[17,"LZMA_DICT_SIZE_DEFAULT",E,E,N,N],[17,"LZMA_LCLP_MIN",E,E,N,N],[17,"LZMA_LCLP_MAX",E,E,N,N],[17,"LZMA_LC_DEFAULT",E,E,N,N],[17,"LZMA_LP_DEFAULT",E,E,N,N],[17,"LZMA_PB_MIN",E,E,N,N],[17,"LZMA_PB_MAX",E,E,N,N],[17,"LZMA_PB_DEFAULT",E,E,N,N],[17,"LZMA_BACKWARD_SIZE_MIN",E,E,N,N],[17,"LZMA_BACKWARD_SIZE_MAX",E,E,N,N],[17,"LZMA_VLI_MAX",E,E,N,N],[17,"LZMA_VLI_UNKNOWN",E,E,N,N],[17,"LZMA_VLI_BYTES_MAX",E,E,N,N],[17,"LZMA_FILTER_X86",E,E,N,N],[17,"LZMA_FILTER_POWERPC",E,E,N,N],[17,"LZMA_FILTER_IA64",E,E,N,N],[17,"LZMA_FILTER_ARM",E,E,N,N],[17,"LZMA_FILTER_ARMTHUMB",E,E,N,N],[17,"LZMA_FILTER_SPARC",E,E,N,N],[17,"LZMA_FILTER_LZMA1",E,E,N,N],[17,"LZMA_FILTER_LZMA2",E,E,N,N],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[37],E,E,0,[[[U]],[R[3]]]],[11,R[38],E,E,0,[[],[R[3]]]],[11,R[41],E,E,0,[[["self"]],[T]]],[11,R[39],E,E,0,[[["self"]],[T]]],[11,R[40],E,E,0,[[["self"]],[R[42]]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[37],E,E,1,[[[U]],[R[3]]]],[11,R[38],E,E,1,[[],[R[3]]]],[11,R[41],E,E,1,[[["self"]],[T]]],[11,R[39],E,E,1,[[["self"]],[T]]],[11,R[40],E,E,1,[[["self"]],[R[42]]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[37],E,E,2,[[[U]],[R[3]]]],[11,R[38],E,E,2,[[],[R[3]]]],[11,R[41],E,E,2,[[["self"]],[T]]],[11,R[39],E,E,2,[[["self"]],[T]]],[11,R[40],E,E,2,[[["self"]],[R[42]]]],[11,"into",E,E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[37],E,E,3,[[[U]],[R[3]]]],[11,R[38],E,E,3,[[],[R[3]]]],[11,R[41],E,E,3,[[["self"]],[T]]],[11,R[39],E,E,3,[[["self"]],[T]]],[11,R[40],E,E,3,[[["self"]],[R[42]]]],[11,"into",E,E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[43],E,E,4,[[["self"]],[T]]],[11,R[44],E,E,4,[[["self"],[T]]]],[11,R[37],E,E,4,[[[U]],[R[3]]]],[11,R[38],E,E,4,[[],[R[3]]]],[11,R[41],E,E,4,[[["self"]],[T]]],[11,R[39],E,E,4,[[["self"]],[T]]],[11,R[40],E,E,4,[[["self"]],[R[42]]]],[11,"into",E,E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[37],E,E,5,[[[U]],[R[3]]]],[11,R[38],E,E,5,[[],[R[3]]]],[11,R[41],E,E,5,[[["self"]],[T]]],[11,R[39],E,E,5,[[["self"]],[T]]],[11,R[40],E,E,5,[[["self"]],[R[42]]]],[11,"into",E,E,6,[[],[U]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[37],E,E,6,[[[U]],[R[3]]]],[11,R[38],E,E,6,[[],[R[3]]]],[11,R[41],E,E,6,[[["self"]],[T]]],[11,R[39],E,E,6,[[["self"]],[T]]],[11,R[40],E,E,6,[[["self"]],[R[42]]]],[11,"into",E,E,7,[[],[U]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[37],E,E,7,[[[U]],[R[3]]]],[11,R[38],E,E,7,[[],[R[3]]]],[11,R[41],E,E,7,[[["self"]],[T]]],[11,R[39],E,E,7,[[["self"]],[T]]],[11,R[40],E,E,7,[[["self"]],[R[42]]]],[11,"clone",E,E,4,[[["self"]],[R[54]]]]],"p":[[3,R[55]],[3,R[56]],[3,R[57]],[3,"lzma_mt"],[3,R[54]],[3,R[58]],[3,R[59]],[4,R[60]]]};
searchIndex["xz2"]={"doc":"LZMA/XZ encoding and decoding streams","i":[[0,R[2],"xz2","Raw in-memory LZMA streams.",N,N],[3,"Stream",R[36],"Representation of an in-memory LZMA encoding or decoding…",N,N],[3,R[52],E,"Options that can be used to configure how LZMA encoding…",N,N],[3,R[53],E,"Builder to create a multi-threaded stream encoder.",N,N],[3,"Filters",E,"A custom chain of filters to configure an encoding stream.",N,N],[4,"Action",E,"The `action` argument for `process`,",N,N],[13,"Run",E,"Continue processing",0,N],[13,"SyncFlush",E,"Make all the input available at output",0,N],[13,"FullFlush",E,R[0],0,N],[13,"FullBarrier",E,R[0],0,N],[13,"Finish",E,"Finish the current operation",0,N],[4,"Status",E,"Return value of a `process` operation.",N,N],[13,"Ok",E,"Operation completed successfully.",1,N],[13,"StreamEnd",E,"End of stream was reached.",1,N],[13,"GetCheck",E,"If the TELL_ANY_CHECK flags is specified when constructing…",1,N],[13,"MemNeeded",E,"An error has not been encountered, but no progress is…",1,N],[4,"Error",E,"Possible error codes that can be returned from a…",N,N],[13,"Data",E,"The underlying data was corrupt.",2,N],[13,"Options",E,"Invalid or unsupported options were specified.",2,N],[13,"Format",E,"File format wasn't recognized.",2,N],[13,"MemLimit",E,"Memory usage limit was reached.",2,N],[13,"Mem",E,"Memory couldn't be allocated.",2,N],[13,"Program",E,"A programming error was encountered.",2,N],[13,"NoCheck",E,"The `TELL_NO_CHECK` flag was specified and no integrity…",2,N],[13,"UnsupportedCheck",E,"The `TELL_UNSUPPORTED_CHECK` flag was specified and no…",2,N],[4,"Check",E,"Possible integrity checks that can be part of a .xz stream.",N,N],[13,"None",E,E,3,N],[13,"Crc32",E,E,3,N],[13,"Crc64",E,E,3,N],[13,"Sha256",E,E,3,N],[4,"Mode",E,"Compression modes",N,N],[13,"Fast",E,"Fast compression.",4,N],[13,"Normal",E,"Normal compression.",4,N],[4,R[51],E,"Match finders",N,N],[13,"HashChain3",E,"Hash Chain with 2- and 3-byte hashing",5,N],[13,"HashChain4",E,"Hash Chain with 2-, 3-, and 4-byte hashing",5,N],[13,"BinaryTree2",E,"Binary Tree with 2-byte hashing",5,N],[13,"BinaryTree3",E,"Binary Tree with 2- and 3-byte hashing",5,N],[13,"BinaryTree4",E,"Binary Tree with 2-, 3-, and 4-byte hashing",5,N],[17,"TELL_ANY_CHECK",E,R[1],N,N],[17,"TELL_NO_CHECK",E,R[1],N,N],[17,"TELL_UNSUPPORTED_CHECK",E,R[1],N,N],[17,"IGNORE_CHECK",E,"A flag passed when initializing a decoder, causes the…",N,N],[17,"CONCATENATED",E,"A flag passed when initializing a decoder, indicates that…",N,N],[11,"new_easy_encoder",E,"Initialize .xz stream encoder using a preset number",6,[[["u32"],["check"]],[[R[2]],[R[3],[R[2],R[4]]],[R[4]]]]],[11,"new_lzma_encoder",E,"Initialize .lzma encoder (legacy file format)",6,[[[R[7]]],[[R[2]],[R[3],[R[2],R[4]]],[R[4]]]]],[11,"new_stream_encoder",E,"Initialize .xz Stream encoder using a custom filter chain",6,[[[R[9]],["check"]],[[R[2]],[R[3],[R[2],R[4]]],[R[4]]]]],[11,"new_stream_decoder",E,"Initialize a .xz stream decoder.",6,[[["u32"],["u64"]],[[R[2]],[R[3],[R[2],R[4]]],[R[4]]]]],[11,"new_lzma_decoder",E,"Initialize a .lzma stream decoder.",6,[[["u64"]],[[R[2]],[R[3],[R[2],R[4]]],[R[4]]]]],[11,"new_auto_decoder",E,"Initialize a decoder which will choose a stream/lzma…",6,[[["u32"],["u64"]],[[R[2]],[R[3],[R[2],R[4]]],[R[4]]]]],[11,"process",E,"Processes some data from input into an output buffer.",6,[[[R[6]],["self"]],[[R[5]],[R[4]],[R[3],[R[5],R[4]]]]]],[11,"process_vec",E,"Performs the same data as `process`, but places output…",6,[[["vec"],["self"],[R[6]]],[[R[5]],[R[4]],[R[3],[R[5],R[4]]]]]],[11,R[12],E,"Returns the total amount of input bytes consumed by this…",6,[[["self"]],["u64"]]],[11,R[11],E,"Returns the total amount of bytes produced by this stream.",6,[[["self"]],["u64"]]],[11,"memlimit",E,"Get the current memory usage limit.",6,[[["self"]],["u64"]]],[11,"set_memlimit",E,"Set the current memory usage limit.",6,[[["self"],["u64"]],[[R[3],[R[4]]],[R[4]]]]],[11,"new_preset",E,"Creates a new blank set of options for encoding.",7,[[["u32"]],[[R[4]],[R[3],[R[7],R[4]]],[R[7]]]]],[11,R[61],E,"Configures the dictionary size, in bytes",7,[[["self"],["u32"]],[R[7]]]],[11,"literal_context_bits",E,"Configures the number of literal context bits.",7,[[["self"],["u32"]],[R[7]]]],[11,"literal_position_bits",E,"Configures the number of literal position bits.",7,[[["self"],["u32"]],[R[7]]]],[11,"position_bits",E,"Configures the number of position bits.",7,[[["self"],["u32"]],[R[7]]]],[11,"mode",E,"Configures the compression mode.",7,[[["self"],["mode"]],[R[7]]]],[11,R[62],E,"Configures the nice length of a match.",7,[[["self"],["u32"]],[R[7]]]],[11,"match_finder",E,"Configures the match finder ID.",7,[[["self"],[R[48]]],[R[7]]]],[11,"depth",E,"Maximum search depth in the match finder.",7,[[["self"],["u32"]],[R[7]]]],[11,R[8],E,"Test if this check is supported in this build of liblzma.",3,[[["self"]],["bool"]]],[11,R[8],E,"Test if this match finder is supported in this build of…",5,[[["self"]],["bool"]]],[11,"new",E,"Creates a new filter chain with no filters.",8,[[],[R[9]]]],[11,"lzma1",E,"Add an LZMA1 filter.",8,[[["self"],[R[7]]],[R[9]]]],[11,"lzma2",E,"Add an LZMA2 filter.",8,[[["self"],[R[7]]],[R[9]]]],[11,"x86",E,"Add a filter for x86 binaries.",8,[[["self"]],[R[9]]]],[11,"powerpc",E,"Add a filter for PowerPC binaries.",8,[[["self"]],[R[9]]]],[11,"ia64",E,"Add a filter for IA-64 (itanium) binaries.",8,[[["self"]],[R[9]]]],[11,"arm",E,"Add a filter for ARM binaries.",8,[[["self"]],[R[9]]]],[11,"arm_thumb",E,"Add a filter for ARM-Thumb binaries.",8,[[["self"]],[R[9]]]],[11,"sparc",E,"Add a filter for SPARC binaries.",8,[[["self"]],[R[9]]]],[11,"new",E,"Creates a new blank builder to create a multithreaded…",9,[[],["mtstreambuilder"]]],[11,"threads",E,"Configures the number of worker threads to use",9,[[["self"],["u32"]],["self"]]],[11,R[63],E,"Configures the maximum uncompressed size of a block",9,[[["self"],["u64"]],["self"]]],[11,"timeout_ms",E,"Timeout to allow `process` to return early",9,[[["self"],["u32"]],["self"]]],[11,"preset",E,"Compression preset (level and possible flags)",9,[[["self"],["u32"]],["self"]]],[11,R[9],E,"Configure a custom filter chain",9,[[["self"],[R[9]]],["self"]]],[11,"check",E,"Configures the integrity check type",9,[[["self"],["check"]],["self"]]],[11,"memusage",E,"Calculate approximate memory usage of multithreaded .xz…",9,[[["self"]],["u64"]]],[11,"encoder",E,"Initialize multithreaded .xz stream encoder.",9,[[["self"]],[[R[2]],[R[3],[R[2],R[4]]],[R[4]]]]],[0,"bufread","xz2","I/O streams for wrapping `BufRead` types as…",N,N],[3,R[20],R[45],"An xz encoder, or compressor.",N,N],[3,R[21],E,"A xz decoder, or decompressor.",N,N],[11,"new",E,"Creates a new encoder which will read uncompressed data…",10,[[["u32"],["r"]],[R[10]]]],[11,R[15],E,R[22],10,[[[R[2]],["r"]],[R[10]]]],[11,R[23],E,R[16],10,[[["self"]],["r"]]],[11,R[24],E,R[17],10,[[["self"]],["r"]]],[11,R[18],E,"Consumes this encoder, returning the underlying reader.",10,[[],["r"]]],[11,R[11],E,R[25],10,[[["self"]],["u64"]]],[11,R[12],E,R[26],10,[[["self"]],["u64"]]],[11,"new",E,R[13],11,[[["r"]],[R[14]]]],[11,R[27],E,R[13],11,[[["r"]],[R[14]]]],[11,R[15],E,R[29],11,[[[R[2]],["r"]],[R[14]]]],[11,R[23],E,R[16],11,[[["self"]],["r"]]],[11,R[24],E,R[17],11,[[["self"]],["r"]]],[11,R[18],E,"Consumes this decoder, returning the underlying reader.",11,[[],["r"]]],[11,R[12],E,R[19],11,[[["self"]],["u64"]]],[11,R[11],E,R[19],11,[[["self"]],["u64"]]],[0,"read","xz2","Reader-based compression/decompression streams",N,N],[3,R[20],R[46],"A compression stream which wraps an uncompressed stream of…",N,N],[3,R[21],E,"A decompression stream which wraps a compressed stream of…",N,N],[11,"new",E,R[31],12,[[["u32"],["r"]],[R[10]]]],[11,R[15],E,R[22],12,[[[R[2]],["r"]],[R[10]]]],[11,R[23],E,R[16],12,[[["self"]],["r"]]],[11,R[24],E,R[17],12,[[["self"]],["r"]]],[11,R[18],E,R[30],12,[[],["r"]]],[11,R[11],E,R[25],12,[[["self"]],["u64"]]],[11,R[12],E,R[26],12,[[["self"]],["u64"]]],[11,"new",E,R[28],13,[[["r"]],[R[14]]]],[11,R[27],E,R[28],13,[[["r"]],[R[14]]]],[11,R[15],E,R[29],13,[[[R[2]],["r"]],[R[14]]]],[11,R[23],E,R[16],13,[[["self"]],["r"]]],[11,R[24],E,R[17],13,[[["self"]],["r"]]],[11,R[18],E,R[30],13,[[],["r"]]],[11,R[11],E,"Returns the number of bytes produced by the decompressor…",13,[[["self"]],["u64"]]],[11,R[12],E,R[35],13,[[["self"]],["u64"]]],[0,"write","xz2","Writer-based compression/decompression streams",N,N],[3,R[20],R[47],"A compression stream which will have uncompressed data…",N,N],[3,R[21],E,"A compression stream which will have compressed data…",N,N],[11,"new",E,R[31],14,[[["w"],["u32"]],[R[10]]]],[11,R[15],E,"Create a new encoder which will use the specified `Stream`…",14,[[["w"],[R[2]]],[R[10]]]],[11,R[23],E,R[33],14,[[["self"]],["w"]]],[11,R[24],E,R[34],14,[[["self"]],["w"]]],[11,"try_finish",E,"Attempt to finish this output stream, writing out final…",14,[[["self"]],[R[3]]]],[11,"finish",E,"Consumes this encoder, flushing the output stream.",14,[[],[R[3]]]],[11,R[11],E,"Returns the number of bytes produced by the compressor",14,[[["self"]],["u64"]]],[11,R[12],E,R[26],14,[[["self"]],["u64"]]],[11,"new",E,R[32],15,[[["w"]],[R[14]]]],[11,R[27],E,R[32],15,[[["w"]],[R[14]]]],[11,R[15],E,"Creates a new decoding stream which will decode all input…",15,[[["w"],[R[2]]],[R[14]]]],[11,R[23],E,R[33],15,[[["self"]],["w"]]],[11,R[24],E,R[34],15,[[["self"]],["w"]]],[11,"finish",E,R[30],15,[[["self"]],[R[3]]]],[11,R[11],E,"Returns the number of bytes produced by the decompressor",15,[[["self"]],["u64"]]],[11,R[12],E,R[35],15,[[["self"]],["u64"]]],[11,"into",R[36],E,6,[[],[U]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[37],E,E,6,[[[U]],[R[3]]]],[11,R[38],E,E,6,[[],[R[3]]]],[11,R[41],E,E,6,[[["self"]],[T]]],[11,R[39],E,E,6,[[["self"]],[T]]],[11,R[40],E,E,6,[[["self"]],[R[42]]]],[11,"into",E,E,7,[[],[U]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[37],E,E,7,[[[U]],[R[3]]]],[11,R[38],E,E,7,[[],[R[3]]]],[11,R[41],E,E,7,[[["self"]],[T]]],[11,R[39],E,E,7,[[["self"]],[T]]],[11,R[40],E,E,7,[[["self"]],[R[42]]]],[11,"into",E,E,9,[[],[U]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[37],E,E,9,[[[U]],[R[3]]]],[11,R[38],E,E,9,[[],[R[3]]]],[11,R[41],E,E,9,[[["self"]],[T]]],[11,R[39],E,E,9,[[["self"]],[T]]],[11,R[40],E,E,9,[[["self"]],[R[42]]]],[11,"into",E,E,8,[[],[U]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[37],E,E,8,[[[U]],[R[3]]]],[11,R[38],E,E,8,[[],[R[3]]]],[11,R[41],E,E,8,[[["self"]],[T]]],[11,R[39],E,E,8,[[["self"]],[T]]],[11,R[40],E,E,8,[[["self"]],[R[42]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[43],E,E,0,[[["self"]],[T]]],[11,R[44],E,E,0,[[["self"],[T]]]],[11,R[37],E,E,0,[[[U]],[R[3]]]],[11,R[38],E,E,0,[[],[R[3]]]],[11,R[41],E,E,0,[[["self"]],[T]]],[11,R[39],E,E,0,[[["self"]],[T]]],[11,R[40],E,E,0,[[["self"]],[R[42]]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[43],E,E,1,[[["self"]],[T]]],[11,R[44],E,E,1,[[["self"],[T]]]],[11,R[37],E,E,1,[[[U]],[R[3]]]],[11,R[38],E,E,1,[[],[R[3]]]],[11,R[41],E,E,1,[[["self"]],[T]]],[11,R[39],E,E,1,[[["self"]],[T]]],[11,R[40],E,E,1,[[["self"]],[R[42]]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[43],E,E,2,[[["self"]],[T]]],[11,R[44],E,E,2,[[["self"],[T]]]],[11,"to_string",E,E,2,[[["self"]],["string"]]],[11,R[37],E,E,2,[[[U]],[R[3]]]],[11,R[38],E,E,2,[[],[R[3]]]],[11,R[41],E,E,2,[[["self"]],[T]]],[11,R[39],E,E,2,[[["self"]],[T]]],[11,R[40],E,E,2,[[["self"]],[R[42]]]],[11,"into",E,E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[43],E,E,3,[[["self"]],[T]]],[11,R[44],E,E,3,[[["self"],[T]]]],[11,R[37],E,E,3,[[[U]],[R[3]]]],[11,R[38],E,E,3,[[],[R[3]]]],[11,R[41],E,E,3,[[["self"]],[T]]],[11,R[39],E,E,3,[[["self"]],[T]]],[11,R[40],E,E,3,[[["self"]],[R[42]]]],[11,"into",E,E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[43],E,E,4,[[["self"]],[T]]],[11,R[44],E,E,4,[[["self"],[T]]]],[11,R[37],E,E,4,[[[U]],[R[3]]]],[11,R[38],E,E,4,[[],[R[3]]]],[11,R[41],E,E,4,[[["self"]],[T]]],[11,R[39],E,E,4,[[["self"]],[T]]],[11,R[40],E,E,4,[[["self"]],[R[42]]]],[11,"into",E,E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[43],E,E,5,[[["self"]],[T]]],[11,R[44],E,E,5,[[["self"],[T]]]],[11,R[37],E,E,5,[[[U]],[R[3]]]],[11,R[38],E,E,5,[[],[R[3]]]],[11,R[41],E,E,5,[[["self"]],[T]]],[11,R[39],E,E,5,[[["self"]],[T]]],[11,R[40],E,E,5,[[["self"]],[R[42]]]],[11,"into",R[45],E,10,[[],[U]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[37],E,E,10,[[[U]],[R[3]]]],[11,R[38],E,E,10,[[],[R[3]]]],[11,R[41],E,E,10,[[["self"]],[T]]],[11,R[39],E,E,10,[[["self"]],[T]]],[11,R[40],E,E,10,[[["self"]],[R[42]]]],[11,"into",E,E,11,[[],[U]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[37],E,E,11,[[[U]],[R[3]]]],[11,R[38],E,E,11,[[],[R[3]]]],[11,R[41],E,E,11,[[["self"]],[T]]],[11,R[39],E,E,11,[[["self"]],[T]]],[11,R[40],E,E,11,[[["self"]],[R[42]]]],[11,"into",R[46],E,12,[[],[U]]],[11,"from",E,E,12,[[[T]],[T]]],[11,R[37],E,E,12,[[[U]],[R[3]]]],[11,R[38],E,E,12,[[],[R[3]]]],[11,R[41],E,E,12,[[["self"]],[T]]],[11,R[39],E,E,12,[[["self"]],[T]]],[11,R[40],E,E,12,[[["self"]],[R[42]]]],[11,"into",E,E,13,[[],[U]]],[11,"from",E,E,13,[[[T]],[T]]],[11,R[37],E,E,13,[[[U]],[R[3]]]],[11,R[38],E,E,13,[[],[R[3]]]],[11,R[41],E,E,13,[[["self"]],[T]]],[11,R[39],E,E,13,[[["self"]],[T]]],[11,R[40],E,E,13,[[["self"]],[R[42]]]],[11,"into",R[47],E,14,[[],[U]]],[11,"from",E,E,14,[[[T]],[T]]],[11,R[37],E,E,14,[[[U]],[R[3]]]],[11,R[38],E,E,14,[[],[R[3]]]],[11,R[41],E,E,14,[[["self"]],[T]]],[11,R[39],E,E,14,[[["self"]],[T]]],[11,R[40],E,E,14,[[["self"]],[R[42]]]],[11,"into",E,E,15,[[],[U]]],[11,"from",E,E,15,[[[T]],[T]]],[11,R[37],E,E,15,[[[U]],[R[3]]]],[11,R[38],E,E,15,[[],[R[3]]]],[11,R[41],E,E,15,[[["self"]],[T]]],[11,R[39],E,E,15,[[["self"]],[T]]],[11,R[40],E,E,15,[[["self"]],[R[42]]]],[11,"drop",R[36],E,6,[[["self"]]]],[11,"drop",R[47],E,14,[[["self"]]]],[11,"drop",E,E,15,[[["self"]]]],[11,"clone",R[36],E,0,[[["self"]],[R[6]]]],[11,"clone",E,E,1,[[["self"]],[R[5]]]],[11,"clone",E,E,2,[[["self"]],[R[4]]]],[11,"clone",E,E,3,[[["self"]],["check"]]],[11,"clone",E,E,4,[[["self"]],["mode"]]],[11,"clone",E,E,5,[[["self"]],[R[48]]]],[11,"eq",E,E,1,[[[R[5]],["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"],[R[4]]],["bool"]]],[11,"fmt",E,E,2,[[["self"],[R[49]]],[R[3]]]],[11,"fmt",E,E,1,[[["self"],[R[49]]],[R[3]]]],[11,"fmt",E,E,2,[[["self"],[R[49]]],[R[3]]]],[11,"read",R[45],E,10,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"read",E,E,11,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"read",R[46],E,12,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"read",E,E,13,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"read",R[47],E,14,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"read",E,E,15,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"write",R[45],E,10,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"flush",E,E,10,[[["self"]],[R[3]]]],[11,"write",E,E,11,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"flush",E,E,11,[[["self"]],[R[3]]]],[11,"write",R[46],E,12,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"flush",E,E,12,[[["self"]],[R[3]]]],[11,"write",E,E,13,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"flush",E,E,13,[[["self"]],[R[3]]]],[11,"write",R[47],E,14,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"flush",E,E,14,[[["self"]],[R[3]]]],[11,"write",E,E,15,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"flush",E,E,15,[[["self"]],[R[3]]]],[11,R[50],R[45],E,10,[[["self"]],[["poll",[R[4]]],[R[4]]]]],[11,R[50],E,E,11,[[["self"]],[["poll",[R[4]]],[R[4]]]]],[11,R[50],R[46],E,12,[[["self"]],[["poll",[R[4]]],[R[4]]]]],[11,R[50],E,E,13,[[["self"]],[["poll",[R[4]]],[R[4]]]]],[11,R[50],R[47],E,14,[[["self"]],[["poll",[R[4]]],[R[4]]]]],[11,R[50],E,E,15,[[["self"]],[["poll",[R[4]]],[R[4]]]]]],"p":[[4,"Action"],[4,"Status"],[4,"Error"],[4,"Check"],[4,"Mode"],[4,R[51]],[3,"Stream"],[3,R[52]],[3,"Filters"],[3,R[53]],[3,R[20]],[3,R[21]],[3,R[20]],[3,R[21]],[3,R[20]],[3,R[21]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);