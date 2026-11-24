-module(editor_environment).
-export([get_place/0, image_cache_directory/0]).
get_place() ->
    case os:getenv("PLACE") of
        false ->
            case file:read_file("../.env") of
                {ok, Bin} ->
                    case re:run(Bin, <<"(?m)^\\s*PLACE\\s*=\\s*([^\\r\\n]*)">>, [{capture, [1], binary}]) of
                        {match, [Value]} ->
                            unicode:characters_to_binary(string:trim(string:trim(binary_to_list(Value)), both, "\"'"));
                        nomatch -> <<>>
                    end;
                _ -> <<>>
            end;
        Value -> unicode:characters_to_binary(Value)
    end.

image_cache_directory() ->
    case os:getenv("WLY_IMAGE_CACHE_DIR") of
        false -> <<>>;
        Value -> unicode:characters_to_binary(Value)
    end.
