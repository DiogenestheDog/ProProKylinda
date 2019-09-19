@posts.each do |post|
    json.set! post.id do
        json.header post.header
        json.body post.body
        json.user_id post.user_id
        json.id post.id
    end
end