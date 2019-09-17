json.users @posts do |post|
    json.set! post.user_id do
        json.id post.user.id
        json.username post.user.username
        json.email post.user.email
    end
end

json.posts @posts do |post|
    json.set! post.id do
        json.header post.header
        json.body post.body
        json.user_id post.user_id
        json.id post.id
    end
end