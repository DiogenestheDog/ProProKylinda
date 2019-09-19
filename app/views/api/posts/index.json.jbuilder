
@posts.each do |post|
    json.set! post.id do
        json.header post.header
        json.body post.body
        json.user_id post.user_id
        json.id post.id
        json.imageURL post.image.attached? ? url_for(post.image) : ""
    end
end